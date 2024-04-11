import { Agent as NodeAgent } from "node:https";
import { Agent as UndiciAgent } from "undici";
import { fetch as _fetch } from "node-fetch-native";
import type { AgentOptions } from "../agent";

export function createAgent(opts: AgentOptions = {}) {
  const nodeAgent = new NodeAgent({
    rejectUnauthorized: opts.rejectUnauthorized,
  });

  const undiciAgent = new UndiciAgent({
    connect: {
      rejectUnauthorized: opts.rejectUnauthorized,
    },
  });

  return {
    agent: nodeAgent,
    dispatcher: undiciAgent,
  };
}

export function createFetch(agentOptions: AgentOptions = {}) {
  const agent = createAgent(agentOptions);
  return (url, fetchOptions) => _fetch(url, { ...agent, ...fetchOptions });
}

export const fetch = createFetch({});
