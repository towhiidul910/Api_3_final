// connect role to user

import { Request, Response } from "express";
import { prisma } from "../../../../../prisma/prisma";

export const connectRoleToUserControllerV1 = async (
  req: Request,
  res: Response
) => {
  try {
    const { roleIds, userId } = req.body;

    const connectRole = await prisma.users.update({
      where: {
        id: userId,
      },
      data: {
        roles: {
          connect: roleIds.map((id: number) => ({ id })),
        },
      },
      include: {
        roles: true,
        userGroups: {
          include: {
            group: true,
          },
        },
      },
    });

    res.status(200).json({ success: connectRole });
  } catch (err) {
    console.error({ "error 😲": err });
    res.status(500).json({ "Internal server Error 😲": err });
  }
};

// connect users to role

export const connectUserToRoleControllerV2 = async (
  req: Request,
  res: Response
) => {
  try {
    const { userIds, roleId } = req.body;

    const connectUser = await prisma.role.update({
      where: {
        id: roleId,
      },
      data: {
        users: {
          connect: [...userIds.map((id: number) => ({ id }))],
        },
      },
      include: {
        users: {
          include: {
            userGroups: true,
            roles: true,
          },
        },
      },
    });

    res.status(200).json({ success: connectUser });
  } catch (err) {
    console.error({ "error 😲": err });
    res.status(500).json({ "Internal server Error 😲": err });
  }
};

// connect groups to user (it's manually added NM connection and we made the userGroups), it replace existing user id with the body userId
// and if you remember in 1:m we use to made the relation with a PK (userId) in the M side , which connect the post inside the Users, so when we change the PK inside the post to other user id then the post will belong to that other user.
// kinda same way we are doing this manual N:M , we connect the user to a userGroup array and the user group array to a group , in real N:M prima handle it by it self under the hood (which is better). but in here we are handling that by our self , so whats happens in this function we are picking a userGroup by its userGroup.id and replacing it userGroup.userId (pk) property with the req.body.userId. so the req.body.userId get what ever the userGroup has aka the group, which is fucking dumb

export const connectGroupsToUserControllerV3 = async (
  req: Request,
  res: Response
) => {
  try {
    const { userId, groupIds } = req.body;

    const connectGroups = await prisma.users.update({
      where: {
        id: userId,
      },
      data: {
        userGroups: {
          connect: groupIds.map((id: number) => ({ id })),
        }, // if you
      },
      include: {
        roles: true,
        userGroups: {
          include: {
            group: true,
          },
        },
      },
    });

    res.status(200).json({ message: "success", connectGroups });
  } catch (err) {
    console.error({ "error 😲": err });
    res.status(500).json({ "Internal server Error 😲": err });
  }
};

// you cannot connect group (manual join table) like role (automatically join)

export const connectUsersToGroupsControllerV4 = async (
  req: Request,
  res: Response
) => {
  try {
    const { userIds, groupId } = req.body;

    const connectUser = prisma.group.update({
      where: {
        id: groupId,
      },
      data: {
        userGroups: {
          // auto complete not suggesting group 😭
          connect: userIds.map((id: number) => id),
        },
      },
      include: {
        userGroups: {
          include: {
            user: true,
            group: true,
          },
        },
      },
    });
    res.status(200).json({ message: "success", connectUser });
  } catch (err) {
    console.error({ "error 😲": err });
    res.status(500).json({ "Internal server Error 😲": err });
  }
};

// this is the one way to connect a group with multiply ple user,
// here we are creating new columns , a row exist then skip it and create which one doesn't
export const connectUsersToGroupsControllerV6 = async (
  req: Request,
  res: Response
) => {
  try {
    const { userIds, groupId } = req.body;

    const connectUser = await prisma.userGroups.createMany({
      data: userIds.map((userId: number) => ({ userId, groupId })),
      skipDuplicates: true,
    });

    const group = await prisma.userGroups.findMany({
      where: {
        id: groupId,
      },
    });
    res.status(200).json({ message: "success", connectUser, group });
  } catch (err) {
    console.error({ "error 😲": err });
    res.status(500).json({ "Internal server Error 😲": err });
  }
};

// and also we can do that with upsert = update if exists, create if not

// now in tis case upsert is overkill. It’s designed for full models where you might want to change fields if the row exists, we just have two fields userId and groupId

// when to use upsert : upsert is for models that have extra fields besides the unique key aka {userId, groupId }. suppose we have joinedAt time and we want to update that as well then in that case well use upsert
// https://chatgpt.com/s/t_68b800ecea0c819188e4b6df73c82486
export const connectUsersToGroupsControllerV7 = async (
  req: Request,
  res: Response
) => {
  try {
    const { userIds, groupId } = req.body;

    const upsert = await prisma.userGroups.upsert({
      where: {
        userId_groupId: userIds.map((userId: number) => ({ userId, groupId })), // in prima we did @@unique([userId, groupId]) , so now we must point to a unique field or @@unique combo
      },
      update: {},
      create: userIds.map((userId: number) => ({ userId, groupId })),
    });
  } catch (err) {
    console.error({ "error 😲": err });
    res.status(500).json({ "Internal server Error 😲": err });
  }
};

// disconnect role
export const disconnectRoleFromUserV8 = async (req: Request, res: Response) => {
  try {
    const { roleId, userId } = req.body;

    const disconnectRole = await prisma.users.update({
      where: {
        id: userId,
      },
      data: {
        roles: {
          disconnect: {
            id: roleId,
          },
        },
      },
      include: {
        roles: true,
      },
    });

    res.status(200).json({ message: "success", disconnectRole });
  } catch (err) {
    console.error({ "error 😲": err });
    res.status(500).json({ "Internal server Error 😲": err });
  }
};

// disconnect groups

export const disconnectUserFromRoleV9 = async (req: Request, res: Response) => {
  try {
    const { userId, groupId } = req.body;

    const disconnectUser = await prisma.userGroups.delete({
      where: {
        userId_groupId: {
          // ⚠️ Prisma requires a UNIQUE identifier for `delete`.
          // In this join table, neither `userId` nor `groupId` is unique on its own,
          // but together they form a composite unique key (`@@unique([userId, groupId])`).
          // So we must use `userId_groupId` to target exactly ONE row.
          userId,
          groupId,
        },
      },
      include: {
        user: true,
      },
    });

    const User = await prisma.users.findUnique({
      where: {
        id: userId,
      },
      include: {
        userGroups: {
          include: {
            group: true,
          },
        },
      },
    });

    res.status(200).json({
      message: "success",
      disconnectUser,
      User,
    });
  } catch (err) {
    console.error({ "error 😲": err });
    res.status(500).json({ "Internal server Error 😲": err });
  }
};

// disconnect multiple users from a role

export const disconnectUsersFromRoleControllerV10 = async (
  req: Request,
  res: Response
) => {
  try {
    const { userIds, role } = req.body;

    const disconnectUsers = await prisma.role.update({
      where: {
        role,
      },
      data: {
        users: {
          disconnect: userIds.map((id: number) => ({ id })),
        },
      },
      include: {
        users: true,
      },
    });

    res.status(200).json({ message: "success", disconnectUsers });
  } catch (err) {
    console.error({ "error 😲": err });
    res.status(500).json({ "Internal server Error 😲": err });
  }
};

// disconnect multiple user form groups at once
// 🦕important delete vs delete many https://chatgpt.com/s/t_68b8297851688191a76a4bd98f03f4f1
// And vs OR https://chatgpt.com/s/t_68b8299d61b081918a3af7c8c0206c42
// final: https://chatgpt.com/s/t_68b8299d61b081918a3af7c8c0206c42

export const disconnectUsersFromGroupsControllerV11 = async (
  req: Request,
  res: Response
) => {
  try {
    const { userIds, groupId } = req.body;
    const disconnectUser = await prisma.userGroups.deleteMany({
      where: {
        OR: userIds.map((userId: number) => ({ userId, groupId })),
      },
      // Now Prisma deletes any row where userId = 1 AND groupId = 2 OR userId = 4 AND groupId = 2 OR userId = 8 AND groupId = 2. // ✅ Exactly what you want.
    });

    res.status(200).json({ message: "success", disconnectUser });
  } catch (err) {
    console.error({ "error 😲": err });
    res.status(500).json({ "Internal server Error 😲": err });
  }
};

// disconnect multiple user form groups at once ❌ wrong
export const disconnectUsersFromGroupsControllerV12 = async (
  req: Request,
  res: Response
) => {
  try {
    const { userIds, groupId } = req.body;
    const disconnectUser = await prisma.userGroups.deleteMany({
      where: userIds.map((userId: number) => ({ userId, groupId })), // by default And, so Prisma will look for a single row where userId = 1 AND userId = 4 AND userId = 8 AND groupId = 2. // That’s impossible — no single row can have multiple userIds. ✅ So it matches nothing.
    });

    res.status(200).json({ message: "success", disconnectUser });
  } catch (err) {
    console.error({ "error 😲": err });
    res.status(500).json({ "Internal server Error 😲": err });
  }
};

// even cleaner

export const disconnectUsersFromGroupsControllerV13 = async (
  req: Request,
  res: Response
) => {
  try {
    const { userIds, groupId } = req.body;
    const disconnectUser = await prisma.userGroups.deleteMany({
      where: {
        groupId,
        userId: { in: userIds },
        //Shorter, faster, and easier to read. // Same result as the OR version.
        //Only rows where groupId = 2 AND userId is 1, 4, or 8 will be deleted
        //It will NOT delete rows where groupId = 2 but userId = 5.
        //It will NOT delete rows where userId = 1 but groupId ≠ 2.
        //WHERE groupId = 2 AND userId IN (1, 4, 8);
      },
    });

    res.status(200).json({ message: "success", disconnectUser });
  } catch (err) {
    console.error({ "error 😲": err });
    res.status(500).json({ "Internal server Error 😲": err });
  }
};

// replace roles for a user. - delete all previously role and add the new role, 1 at a time

export const replaceRoleForUserControllerV14 = async (
  req: Request,
  res: Response
) => {
  try {
    const { userId, newRoleId } = req.body;

    const replaceRole = await prisma.users.update({
      where: { id: userId },
      data: {
        roles: {
          set: [],
          connect: [{ id: newRoleId }],
        },
      },
      include: {
        roles: true,
      },
    });
    res.status(200).json({ message: "success", replaceRole });
  } catch (err) {
    console.error({ "error 😲": err });
    res.status(500).json({ "Internal server Error 😲": err });
  }
};

// replace roles
export const replaceRoleForUserControllerV15 = async (
  req: Request,
  res: Response
) => {
  try {
    const { userId, newRoleIds } = req.body;

    const replaceRole = await prisma.users.update({
      where: { id: userId },
      data: {
        roles: {
          set: [],
          connect: newRoleIds.map((id: number) => ({ id })),
        },
      },
      include: {
        roles: true,
      },
    });
    res.status(200).json({ message: "success", replaceRole });
  } catch (err) {
    console.error({ "error 😲": err });
    res.status(500).json({ "Internal server Error 😲": err });
  }
};

// replace groups

export const replaceGroupForUserControllerV16 = async (
  req: Request,
  res: Response
) => {
  try {
    const { userId, newUserGroupIds } = req.body;

    await prisma.userGroups.deleteMany({
      where: {
        userId,
      },
    });

    const userGroup = await prisma.userGroups.createMany({
      data: newUserGroupIds.map((groupId: number) => ({ userId, groupId })),
      skipDuplicates: true,
    });

    res.status(200).json({ message: "success", userGroup });
  } catch (err) {
    console.error({ "error 😲": err });
    res.status(500).json({ "Internal server Error 😲": err });
  }
};

// relation group with upsert
//in this case after deleteMany : every (userId, groupId) pair is gone, so the upsert’s where check is completely useless. Every upsert will always hit the create branch.
// but we learn promise.all and a different way of using map: https://chatgpt.com/s/t_68b84eb7cffc819181ed3144ac64c74f

export const replaceGroupForUserWithUpsertControllerV17 = async (
  req: Request,
  res: Response
  
) => {
  try {
    const { userId, newUserGroupIds } = req.body;

    await prisma.userGroups.deleteMany({
      where: {
        userId,
      },
    });

    const upsert = await Promise.all(
      newUserGroupIds.map((groupId: number) => prisma.userGroups.upsert({
        where: {
          userId_groupId: {userId, groupId}
        },
        update: {},
        create: {userId, groupId},
      }) )
    )

    res.status(200).json({message: "success", upsert})
  } catch (err) {
    console.error({ "error 😲": err });
    res.status(500).json({ "Internal server Error 😲": err });
  }
};
