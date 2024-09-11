import React from 'react';
import { ManaAppPreset, ManaComponents } from '@difizen/mana-app';
import './index.less'
import { LibroToolbarDemo } from './libro-toolbar';
import { LibroToolbarDemoModule } from '@/modules/libro-toolbar/module';


const App = (): JSX.Element => {
  return (
    <div className="libro-editor-demo">
        <ManaComponents.Application
            key="libro-editor"
            asChild={true}
            modules={[ManaAppPreset, LibroToolbarDemoModule]}
            renderChildren
        >
            <LibroToolbarDemo/>
        </ManaComponents.Application>
    </div>
  );
};

export default App;