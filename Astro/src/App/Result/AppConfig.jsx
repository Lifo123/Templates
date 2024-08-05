import { useRef, useState } from "react";
import { useStore } from "@nanostores/react";
import { MaxNoteStore, DecimalStore, MiniumNoteStore } from "../../context/GlobalContext";

import useTimer from "../../Hooks/useTimer";

export default function AppConfig() {
    //GlobalStates
    const MinNoteAprove = useStore(MiniumNoteStore);
    const MaxNote = useStore(MaxNoteStore);
    const Decimal = useStore(DecimalStore);
 
    //Refs
    const Drop = useRef(null);

    //Hooks
    const { Counting } = useTimer(14);

    //States
    const [DropState, setDropState] = useState(false);

    //DropDown
    const HandleDropConfig = () => {
        setDropState((v) => !v);
        document.addEventListener('click', HandleDocument)
    }
    const HandleDocument = (e) => {
        if (!Drop.current.parentElement.contains(e.target)) {
            setDropState(false);
            document.removeEventListener('click', HandleDocument)
        }
    }

     //Functions
     const MaxNoteValidation = (e) => {
        let Num = Number(e.target.value);
        if (Num <= 0) {
            e.target.value = '';
        } else if (Num >= 1000) {
            e.target.value = 1000;
        }
    }
    const setMaxNote = (e) => {
        let Num = Number(e.target.value);
        if (Num === 0) {
            Num = 20;
        }
        
        document.querySelectorAll('.app-input-input[use = "yes"').forEach(element => {
            if (element.value && Number(element.value) > Num) {
                element.value = Num;
            }
        });

        MaxNoteStore.set(Num);
        
    };
    
    const setMiniumNoteAprove = (e) => {
        MiniumNoteStore.set(Number(e.target.value))
    }
    const setDecimals = (e) => {
        DecimalStore.set(e.target.checked);
    }

    return (
        <>
            <section className='click f-row f-justify-between f-align-center pointer' onClick={HandleDropConfig}>
                <p className='app-text no-select' style={{ fontSize: '14.5px', margin: '0px' }}>Configuration</p>
                <span className='separator no-select'></span>
                <span className='arrow no-select'>
                    <svg className='no-select' viewBox="0 0 24 24" fill="none">
                        <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#a5a5a5" />
                    </svg>
                </span>
            </section>
            <section className={`app-drop-config absolute f-col br-8 o-hidden ${DropState ? null : 'd-none'}`} style={{ zIndex: 10 }} ref={Drop}>
                <h4 style={{ zIndex: 10 }}>Configuration</h4>
                <ul className='f-col px-3 py-2 g-10' style={{ zIndex: 10 }}>
                    <li className='f-row f-justify-between f-align-center'><p>Decimals</p><input type="checkbox" onChange={setDecimals} checked={Decimal}/></li>
                    <li className='f-row f-justify-between f-align-center'><p>Max Note</p><input className='p-2 br-6' placeholder='20' maxLength={4} type="text" onChange={MaxNoteValidation} onKeyDown={(e) => Counting(e, setMaxNote)} /></li>
                    <li className='f-row f-justify-between f-align-center'><p>Min Note Aproved</p><input className='p-2 br-6' placeholder='11.5' maxLength={4} type="text" onChange={setMiniumNoteAprove} /></li>
                </ul>
            </section>
        </>
    )
}