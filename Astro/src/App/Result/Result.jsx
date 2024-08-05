import './Result.css'

import { useStore } from '@nanostores/react';
import { DecimalStore, ResultStore } from '../../context/GlobalContext';
import { MiniumNoteStore } from '../../context/GlobalContext';

import AppConfig from './AppConfig';
import { useEffect } from 'react';

export default function Result() {
    //GlobalStates
    const Result = useStore(ResultStore);
    const Decimal = useStore(DecimalStore);

    //AppStates
    const MiniumNote = useStore(MiniumNoteStore);

    useEffect(() => {
        if(Result === undefined){
            ResultStore.set(20)
        }
    }, [])

    return (
        <section className="app-left f-col g-10">
            <div className="app-config relative">
                <AppConfig />
            </div>
            <div className="app-result br-12 f-col f-align-center g-30" style={{width: Decimal ? 320 : 290}}>
                <span className='f-col g-25'>
                    <h2 className='app-title text-center' style={{ fontSize: 22 }}>Final Result</h2>
                    <div className="d-flex f-center relative">
                        <h3 className='text-center'>{Decimal ? Result.toFixed(2) : Math.round(Result)}</h3>
                    </div>
                </span>
                <p className={`text-center ${Math.round(Result) >= MiniumNote ? 'aproved' : 'reprobed'}`}>{Math.round(Result) >= MiniumNote ? 'Congratulations! You passed!' : 'Sorry, you failed.'}</p>

            </div>
        </section>
    )
}