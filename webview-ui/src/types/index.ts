import type { Ref } from "vue";

export type CheckboxItems = {
  name: string;
  checked: boolean;
};

export interface Issue {
  asset: string | null;
  description: string;
  context: string[];
}

export interface ParsedValidationErrorMessage {
  pipeline: string | null;
  issues: Record<string, Issue[]>;
}

export interface FormattedIssue {
  asset: string | null;
  description: string;
  context: string[];
  expanded: Ref<boolean>;
}

export interface FormattedErrorMessage {
  pipeline: string | null;
  issues: FormattedIssue[];
}

export interface Asset {
  id: string;
  name: string;
  type: string;
  pipeline: string;
  project: string;
  description: string;
  hasUpstreams: boolean;
  hasDownstreams: boolean;
  isFocusAsset?: boolean;
}

export interface Project {
  name: string;
  id: string;
}

export interface BruinNodeProps {
  label: string;
  data: {
    [x: string]: any;
    type: string;
    asset?: Asset;
    project?: Project;
    hasUpstreamForClicking: boolean;
    hasDownstreamForClicking: boolean;
  };
  status?: string;
  onNodeDoubleClick?: Function;
  nodeProps?: any;
}


export interface AssetDataset {
  id: string;
  name: string;
  type: string;
  upstreams?: Upstream[];
  upstream?: Upstream[];
  downstream?: Downstream[];
  isFocusAsset: boolean;
}

export interface Upstream {
  name: string;
  type?: string;
  executable_file?: File;
  definition_file?: File;
  external?: boolean;
}

interface Downstream {
  name: string;
  type: string;
  executable_file: File;
  definition_file: File;
}

interface File {
  name: string;
  path: string;
  content: string;
  type: string;
}


interface Environment {
  name: string;
}

export interface EnvironmentsList {
  selectedEnvironment: string;
  environments: Environment[];
}

export interface PipelineAssets {
  assets: SimpleAsset[];
}

export interface SimpleAsset {
  id: string;
  name: string;
  type: string;
  upstreams: string[];
  downstreams: string[];
  hasUpstreamForClicking?: boolean;
  hasDownstreamForClicking?: boolean;
  isFocusAsset?: boolean;
}