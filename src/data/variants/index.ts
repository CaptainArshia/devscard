import type { DataTransformer } from '../_internals/transformers';
import aiVariant from './ai';
import backendLeadVariant from './backend-lead';

export interface Variant {
  /**
   * Label shown in the version switcher.
   */
  label: string;

  /**
   * [WEB] Path of the web version.
   */
  webPath: string;

  /**
   * Data transformers producing this variant.
   */
  transformers: DataTransformer[];
}

export const variants = {
  ai: { label: 'AI Engineer', webPath: '/', transformers: aiVariant },
  backendLead: { label: 'Backend / Team Lead', webPath: '/backend', transformers: backendLeadVariant },
} as const satisfies Record<string, Variant>;

export type VariantKey = keyof typeof variants;
