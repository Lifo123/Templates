import { useStore } from '@nanostores/react';
import { AppInputStore, NoPerStore } from '../../context/App';
import { ResultStore } from '../../../context/GlobalContext';

import { usePromedy } from '../../../Hooks/usePromedy';

export default function Input({ msg, Delete, save, CalculateLocal }) {
    //AppStates
    const Result = useStore(ResultStore)
    const Inputs = useStore(AppInputStore)
    const Per = useStore(NoPerStore);

    //States
    const Promedy = usePromedy();

    //Functions
    const HandleChange = (e) => {
        let Sum = 0;
        if (e.target.value >= 100) {
            e.target.value = 100;
        }
        document.querySelectorAll('.app-input-per').forEach(element => {
            Sum += Number(element.value);
        })

        msg(Sum !== 100 ? 'No suman 100%' : null);

        const Ponderaded = Promedy.Ponderado(save());

        ResultStore.set(Ponderaded.Result)
        NoPerStore.set(Ponderaded.NoPer)

        CalculateLocal(e, Ponderaded.array)

    }



    return (
        <div className='app-in-per-list f-row f-align-center'>
            <input className='app-input-per br-6 text-center'
                placeholder={Per ? `${Math.round(Per)}%` : '0%'}
                maxLength={3}
                tabIndex={-1}
                onChange={HandleChange}
            />
            <span className='app-in-close d-flex f-center' onClick={Delete}>
                <svg className='no-select' height={28} viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                    <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </span>
        </div>
    )
}