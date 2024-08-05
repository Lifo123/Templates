import { useStore } from '@nanostores/react';
import { DecimalStore, MaxNoteStore, ResultStore } from '../../../context/GlobalContext';
import { AppInputStore } from '../../context/App';
import { usePromedy } from '../../../Hooks/usePromedy';

export default function Input({ text = 'Nota', save, Local = null, CalculateLocal }) {
    //GlobalState
    const { MaxNote, Decimal } = {
        MaxNote: useStore(MaxNoteStore),
        Decimal: useStore(DecimalStore),

    };

    //AppStates
    const { Inputs, Result } = {
        Inputs: useStore(AppInputStore),
        Result: useStore(ResultStore),
    };

    //States
    const Promedy = usePromedy();


    //Functions
    const HandleChange = (e) => {
        if (MaxNote === null) {
            return;
        }
        if (Number(e.target.value) >= MaxNote) {
            e.target.value = MaxNote;
        }

        const Ponderaded = Promedy.Ponderado(save());  

        ResultStore.set(Ponderaded.Result)

        CalculateLocal(e, Ponderaded.array)
    }

    return (
        <div className='app-input-div br-6 f-row f-align-center relative'>
            <input className='app-input-input br-6' placeholder={text} onChange={HandleChange} maxLength={Decimal ? 7 : 4} tabIndex={0} use='yes' />
            <span className='app-input-local d-flex absolute f-center no-select' data-select='local'>
                {
                    Local ? Local.toFixed(2) : null
                }
            </span>
        </div>
    )
}