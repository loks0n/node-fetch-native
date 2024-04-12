import { Agent as HttpNodeAgent } from "node:http";
import { Agent as HttpsNodeAgent } from "node:https";
import { Agent as UndiciAgent } from "undici";
import type { AgentOptions } from "../agent";
import { fetch as _fetch } from "node-fetch-native-with-agent";

export function createAgent(uri?: string, opts: AgentOptions = {}) {
  const connect = {
    rejectUnauthorized: opts.rejectUnauthorized,
  };

  const nodeAgent = uri?.startsWith("https:")
    ? new HttpsNodeAgent(connect)
    : new HttpNodeAgent();

  const undiciAgent = new UndiciAgent({
    connect,
  });

  return {
    agent: nodeAgent,
    dispatcher: undiciAgent,
  };
}

export function createFetch(agentOptions: AgentOptions = {}) {
  const agent = createAgent(undefined, agentOptions);
  return (url, fetchOptions) => _fetch(url, { ...agent, ...fetchOptions });
}

export const fetch = createFetch({});
