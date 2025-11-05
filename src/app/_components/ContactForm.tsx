"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [email, setEmail] = useState("");

  return (
    <form
      className="mt-8 grid grid-cols-1 gap-3 text-left"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thanks! We'll be in touch.");
      }}
    >
      <div className="grid md:grid-cols-2 gap-3">
        <Input
          placeholder="Full name"
          required
          className="rounded-none h-11 bg-black border-white/25 text-white"
        />
        <Input
          placeholder="Company"
          className="rounded-none h-11 bg-black border-white/25 text-white"
        />
      </div>

      <Input
        type="email"
        placeholder="Work email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="rounded-none h-11 bg-black border-white/25 text-white"
      />

      <Textarea
        placeholder="What are you building?"
        className="rounded-none bg-black border-white/25 text-white"
        rows={5}
      />

      <div className="flex items-center justify-center">
        <Button
          type="submit"
          className="rounded-none h-11 px-6 bg-white text-black hover:bg-blue-600 hover:text-white transition-colors"
        >
          SEND MESSAGE
        </Button>
      </div>

      <p className="text-xs text-white/50 mt-2">
        Or email us at hello@grandwillco.com
      </p>
    </form>
  );
}
