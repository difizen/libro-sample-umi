import type { CellOptions } from '@difizen/libro-jupyter';
import { LibroEditorDemoCellModel } from './libro-editor-demo-cell-model';

export type LibroEditorDemoCellModelFactory = (options: CellOptions) => LibroEditorDemoCellModel;
export const LibroEditorDemoCellModelFactory = Symbol('LibroEditorDemoCellModelFactory');