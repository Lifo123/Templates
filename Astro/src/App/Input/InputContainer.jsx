import './Input.css'
import { useStore } from '@nanostores/react';
import { useState } from 'react';
import { usePromedy } from '../../Hooks/usePromedy';
import { AppInputStore, NoPerStore } from '../context/App';
import { ResultStore } from '../../context/GlobalContext';

import InputList from './inputList/InputList';



export default function InputContainer() {
    //GlobalStates

    //AppStates
    const Inputs = useStore(AppInputStore);
    const Per = useStore(NoPerStore);

    //States
    const [InMsg, setInMsg] = useState(null);
    const Promedy = usePromedy();


    //Functions
    const AddInput = () => {
        let NewList = SaveData();

        AppInputStore.set([...Inputs, {
            Note: '',
            id: Inputs.reduce((maxId, input) => Math.max(maxId, input.id), 0) + 1,
            per: ''
        }]);
        NoPerStore.set(100 / (NewList.length + 1))
        
        ResultStore.set(Promedy.Normal(NewList))
    };

    const DeleteInput = (id) => {
        let newList = Inputs.filter((input) => input.id !== id);
        AppInputStore.set(newList);
        NoPerStore.set(100 / newList.length)

        ResultStore.set(Promedy.Normal(newList))
    };

    const SaveData = () => {
        let NewList = [];
        document.querySelectorAll('.app-input-parent[inputid]').forEach(element => {
            NewList = [...NewList, {
                Note: element.querySelector('.app-input-input').value,
                id: Number(element.getAttribute('inputid')),
                per: element.querySelector('.app-input-per').value
            }]
        })
        AppInputStore.set(NewList);

        return NewList
    }

    return (
        <ul className='f-col g-15 f-center'>
            {
                Inputs && Inputs.map((item, index) => (
                    <InputList key={item.id}
                        data={item}
                        SaveData={SaveData}
                        msg={setInMsg}
                        Delete={DeleteInput}
                    />
                ))
            }
            <li className='app-input-parent f-row f-justify-center g-15' >
                <p className='app-text-error app-input-div none f-row f-justify-end f-align-center'>{InMsg ? InMsg : null}</p>
                <div className='app-in-per-list f-row f-align-center'>
                    <span className='pc-btn-black d-flex f-justify-center br-6' onClick={AddInput}>Add</span>
                    <span className='app-in-close none no-select'></span>
                </div>
            </li>
        </ul>
    )
}