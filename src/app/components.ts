import { DetailHeaderComponent } from './components/header/header.component';
import { FluxoCaixaComponent } from './components/fluxo-caixa/fluxo-caixa.component';
import { PdvComponent } from './components/pdv/pdv.component';


export default class Components {
    public static declarations = [
        FluxoCaixaComponent,
        DetailHeaderComponent,
        PdvComponent

    ];

    public static exports = [
        FluxoCaixaComponent,
        DetailHeaderComponent,
        PdvComponent
    ];
}
