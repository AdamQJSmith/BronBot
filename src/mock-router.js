#!/usr/bin/env node

const input = process.argv.slice(2).join(" ").trim();
const text = input.toLowerCase();

function classify(value) {
  if (!value) return { label: "HELP", source: "demo" };
  if (/\b(gmail|email|inbox)\b/.test(value)) return { label: "RETRIEVE_INFO", source: "gmail" };
  if (/\b(calendar|meeting|prep)\b/.test(value)) return { label: "RETRIEVE_INFO", source: "calendar" };
  if (/\b(daily pack|focus|priority|priorities)\b/.test(value)) return { label: "HYBRID", source: "overview" };
  if (/\b(draft|reply|respond)\b/.test(value)) return { label: "TAKE_ACTION", source: "drafting" };
  return { label: "DIRECT_LLM", source: "general" };
}

function render(decision) {
  const sourceName = decision.source.charAt(0).toUpperCase() + decision.source.slice(1);
  return [
    `${sourceName} demo summary`,
    "",
    "What happened:",
    "A mock work signal was routed through the public demo flow.",
    "",
    "Why it matters:",
    "This shows the assistant experience without exposing production logic or live integrations.",
    "",
    "Next move:",
    decision.label === "TAKE_ACTION"
      ? "Draft a short response for review."
      : "Review the top item and decide whether to act now.",
    "",
    "Source:",
    `Public demo router (${decision.label})`,
    "",
    "Next actions",
    "- draft 1 - draft the selected reply",
    "- details - show more context",
    "- refresh - rerun this pull",
  ].join("\n");
}

console.log(render(classify(text)));

