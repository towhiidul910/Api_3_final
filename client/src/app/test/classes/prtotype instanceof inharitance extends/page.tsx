"use client"
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProtoType = () => {
  class Animal {
    name: string;
    age: number;

    constructor(age: number, name: string) {
      this.age = age;
      this.name = name;
    }

    makeSound() {
      console.log(`${this.name} makes a sound.`);
    }
  }

  // Inheriting Animal
  class Dog extends Animal {
    breed: string;

    constructor(name: string, age: number, breed: string) {
      super(age, name); // call parent constructor

      this.breed = breed;
    }
  }

  const myDog = new Dog("rex", 123, "German Shepherd");
  myDog.makeSound(); // Rex barks!

  if (myDog instanceof Dog) {
    console.log("myDog instanceof Dog : true");
  }

  if (myDog instanceof Animal) {
    console.log("myDog instanceof Animal : true");
  }

  //   const breed: unknown = "bog"
  // if (!(breed instanceof Dog)) {
  //     console.log("true")
  // }

  return (
    <>
      <div>
        <h2 className="font-bold text-sky-400">proto type test,</h2>{" "}
        <p>
          err instanceof ZodError = Does err.__proto__ === ZodError.prototype?
        </p>

        <h1 className="font-bold text-sky-400">what instanceof check </h1>
        <p>instanceof checks the prototype chain, NOT the properties:
</p>
      </div>
    </>
  );
};

export default ProtoType;




// Tailwind-only UI, no external UI kits to avoid missing deps in preview
// Default export a React component per instructions.

const Section: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }>
  = ({ title, children, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl bg-neutral-900/40 border border-neutral-800 shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 hover:bg-neutral-900/60"
      >
        <span className="text-left font-semibold text-neutral-100 text-lg">{title}</span>
        <span className="text-neutral-400 text-sm">{open ? "−" : "+"}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="px-4 sm:px-6 pb-4 sm:pb-6"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Code: React.FC<{ code: string; caption?: string }>= ({ code, caption }) => (
  <div className="my-3">
    {caption && <div className="text-xs uppercase tracking-wide text-neutral-400 mb-2">{caption}</div>}
    <pre className="overflow-x-auto rounded-xl bg-black/60 border border-neutral-800 p-4 text-sm leading-relaxed"><code>{code}</code></pre>
  </div>
);

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-neutral-700 bg-neutral-900 px-2.5 py-1 text-xs text-neutral-200">{children}</span>
);

const Divider = () => <div className="h-px bg-neutral-800 my-4" />;

const stepsVariant = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0 },
};

export  function PrototypeInstanceofVisualizer() {
  const [whichCheck, setWhichCheck] = useState<"Dog" | "Animal" | "Object" | "ZodError">("ZodError");

  const chain = useMemo(() => {
    if (whichCheck === "ZodError") {
      return [
        { label: "err", hit: false },
        { label: "→ ZodError.prototype", hit: true },
        { label: "→ Error.prototype", hit: false },
        { label: "→ Object.prototype", hit: false },
        { label: "→ null", hit: false },
      ];
    }
    if (whichCheck === "Dog") {
      return [
        { label: "myDog", hit: false },
        { label: "→ Dog.prototype", hit: true },
        { label: "→ Animal.prototype", hit: false },
        { label: "→ Object.prototype", hit: false },
        { label: "→ null", hit: false },
      ];
    }
    if (whichCheck === "Animal") {
      return [
        { label: "myDog", hit: false },
        { label: "→ Dog.prototype", hit: false },
        { label: "→ Animal.prototype", hit: true },
        { label: "→ Object.prototype", hit: false },
        { label: "→ null", hit: false },
      ];
    }
    return [
      { label: "myDog", hit: false },
      { label: "→ Dog.prototype", hit: false },
      { label: "→ Animal.prototype", hit: false },
      { label: "→ Object.prototype", hit: true },
      { label: "→ null", hit: false },
    ];
  }, [whichCheck]);

  return (
    <div className="min-h-screen w-full bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-10">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">Prototype & <code className="font-mono">instanceof</code> — Visual Note</h1>
          <p className="text-neutral-300 mt-2">A compact, Tailwind-styled cheatsheet you can keep open while building with Next.js + Node/Express + Zod.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Pill>TypeScript</Pill>
            <Pill>Prototype Chain</Pill>
            <Pill>instanceof</Pill>
            <Pill>ZodError</Pill>
          </div>
        </div>

        {/* TL;DR */}
        <Section title="TL;DR" defaultOpen>
          <ul className="list-disc pl-5 space-y-2 text-neutral-200">
            <li>Every object links to a <strong>prototype</strong>; JS looks up that chain when a property/method is missing.</li>
            <li><code className="font-mono">instanceof</code> returns <strong>true</strong> if <code className="font-mono">Ctor.prototype</code> appears anywhere in the object’s prototype chain.</li>
            <li><code className="font-mono">instanceof</code> checks the <em>chain</em>, not properties. Having an <code className="font-mono">issues</code> field ≠ <code className="font-mono">ZodError</code>.</li>
            <li><code className="font-mono">ZodError</code> extends <code className="font-mono">Error</code> and carries a structured <code className="font-mono">issues</code> array plus helpers like <code className="font-mono">format()</code>/<code className="font-mono">flatten()</code>.</li>
          </ul>
        </Section>

        {/* Key Concepts */}
        <Section title="Key Concepts: Prototype, Classes, and instanceOf">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-neutral-800 p-4 bg-neutral-900/30">
              <h3 className="font-semibold mb-2">Prototype (in plain words)</h3>
              <p className="text-neutral-300">A hidden link to a “backup” object. If a property doesn’t exist on your object, JS walks up to its prototype and keeps going until <code className="font-mono">null</code>.</p>
            </div>
            <div className="rounded-xl border border-neutral-800 p-4 bg-neutral-900/30">
              <h3 className="font-semibold mb-2">Classes</h3>
              <p className="text-neutral-300">Syntactic sugar over prototypes. <code className="font-mono">class Dog extends Animal</code> sets <code className="font-mono">Dog.prototype → Animal.prototype</code>.</p>
            </div>
          </div>
          <Divider />
          <div className="rounded-xl border border-neutral-800 p-4 bg-neutral-900/30">
            <h3 className="font-semibold mb-2">What <code className="font-mono">instanceof</code> really checks</h3>
            <p className="text-neutral-300">It verifies whether <code className="font-mono">Ctor.prototype</code> appears in the object’s prototype chain.</p>
            <Code
              caption="Conceptual check"
              code={`// object instanceof Ctor
let proto = object.__proto__;
while (proto) {
  if (proto === Ctor.prototype) return true;
  proto = proto.__proto__;
}
return false;`}
            />
          </div>
        </Section>

        {/* Visual Walkthrough */}
        <Section title="Visual Walkthrough: prototype chain & instanceof">
          <div className="flex flex-wrap gap-2 mb-3">
            {(["ZodError", "Dog", "Animal", "Object"] as const).map(k => (
              <button
                key={k}
                onClick={() => setWhichCheck(k)}
                className={`px-3 py-1.5 rounded-full border text-sm ${whichCheck===k?"bg-neutral-200 text-neutral-900 border-neutral-200":"bg-neutral-900 border-neutral-700 text-neutral-200 hover:bg-neutral-800"}`}
              >
                {k === "ZodError" ? "err instanceof ZodError" : `myDog instanceof ${k}`}
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4">
            <div className="font-mono text-sm">
              {chain.map((n, i) => (
                <motion.div
                  key={i}
                  variants={stepsVariant}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: i * 0.05 }}
                  className={`py-1 ${n.hit ? "text-emerald-300" : "text-neutral-300"}`}
                >
                  {n.label} {n.hit && <span className="ml-2 text-xs uppercase tracking-wide">← match</span>}
                </motion.div>
              ))}
            </div>
            <p className="mt-3 text-neutral-300 text-sm">The walk stops when a match is found (✅) or at <code className="font-mono">null</code>. No property names are inspected.</p>
          </div>
        </Section>

        {/* ZodError Anatomy */}
        <Section title="ZodError Anatomy (what you actually get)">
          <Code
            caption="Typical structure on validation failure (simplified)"
            code={`{
  name: "ZodError",
  message: "2 validation error(s)",
  issues: [
    {
      code: "invalid_type",
      expected: "string",
      received: "number",
      path: ["username"],
      message: "Expected string, received number"
    },
    {
      code: "too_small",
      minimum: 18,
      type: "number",
      inclusive: true,
      path: ["age"],
      message: "Number must be greater than or equal to 18"
    }
  ],
  // plus standard Error fields like stack
}`}
          />
          <Code
            caption="Why instanceof works"
            code={`// Prototype chain for ZodError instances
err → ZodError.prototype → Error.prototype → Object.prototype → null`}
          />
          <Code
            caption="Express middleware pattern"
            code={`import { ZodError } from "zod";

export function validate(schema: any) {
  return (req, res, next) => {
    try {
      const parsed = schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      });
      Object.assign(req, parsed);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({
          message: "Validation failed",
          errors: err.format(), // or err.flatten()
        });
      }
      return res.status(500).json({
        message: "Unknown server error",
        error: err instanceof Error ? err.message : String(err),
      });
    }
  };
}`}
          />
        </Section>

        {/* instanceof vs 'in' */}
        <Section title="instanceof vs 'in' (when to use what)">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-neutral-800 p-4 bg-neutral-900/30">
              <h4 className="font-semibold">Use <code className="font-mono">instanceof</code> when…</h4>
              <ul className="list-disc pl-5 text-neutral-300 space-y-1 mt-2 text-sm">
                <li>You want to check <em>class</em>/constructor identity via prototype chain.</li>
                <li>Error type narrowing (<code className="font-mono">err instanceof ZodError</code>).</li>
                <li>Custom classes (<code className="font-mono">e instanceof MyError</code>).</li>
              </ul>
            </div>
            <div className="rounded-xl border border-neutral-800 p-4 bg-neutral-900/30">
              <h4 className="font-semibold">Use <code className="font-mono">`in`</code> when…</h4>
              <ul className="list-disc pl-5 text-neutral-300 space-y-1 mt-2 text-sm">
                <li>Type is <code className="font-mono">unknown</code> and you need to guard by property presence.</li>
                <li>Working with plain objects / interfaces at runtime.</li>
                <li>But remember: a property existing doesn’t prove class identity.</li>
              </ul>
            </div>
          </div>
          <Code
            caption="Example guard with 'in'"
            code={`function hasIssues(x: unknown): x is { issues: unknown } {
  return typeof x === 'object' && x !== null && 'issues' in x;
}

// Note: This does NOT mean x is a ZodError — just that it has an 'issues' field.`}
          />
        </Section>

        {/* Tips & Tricks */}
        <Section title="Tips & Tricks">
          <ul className="list-disc pl-5 space-y-2 text-neutral-200">
            <li>Prefer composition over inheritance for app/domain models; reserve class inheritance for true is-a relationships.</li>
            <li>Don’t access props on <code className="font-mono">unknown</code>; narrow first with <code className="font-mono">instanceof</code>, <code className="font-mono">typeof</code>, or property guards.</li>
            <li>For API errors, <code className="font-mono">err.format()</code> or <code className="font-mono">err.flatten()</code> gives client-friendly payloads.</li>
            <li>Interfaces/types disappear at runtime — you cannot use <code className="font-mono">instanceof</code> against them.</li>
            <li>When extending built-ins (like <code className="font-mono">Error</code>), ensure correct prototype via <code className="font-mono">Object.setPrototypeOf</code> in custom classes.</li>
          </ul>
        </Section>


        
        

        {/* Footer */}
        <div className="mt-8 text-xs text-neutral-400">
          <p>Keep this tab open as a cheat sheet while you grind Next.js + Express + Zod. 🛠️</p>
        </div>
      </div>
    </div>
  );
}
