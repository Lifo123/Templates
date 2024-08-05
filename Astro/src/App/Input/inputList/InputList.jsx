import './InputList.css'
import { useState } from 'react';
import { usePromedy } from '../../../Hooks/usePromedy';

import Input from './Input'
import InputPer from './InputPer'


export default function InputList({ data, SaveData, msg, Delete}) {
    //States
    const Promedy = usePromedy();
    const [LocalPromedy, setLocalPromedy] = useState(null);

    //Functions
    const CalculateLocal = (e, array) => {
        const parent = e.target.closest('.app-input-parent');
        const Local = Number(parent.getAttribute('inputid'));

        const item = array.find((item) => item.id === Local);


        setLocalPromedy(Promedy.Inline(item));

    }


    return (
        <li className='app-input-parent f-row f-justify-center g-15' inputid={data.id}>
            <Input
                text={data.Note ? data.Note : `Nota ${data.id}`}
                save={SaveData}
                Local={LocalPromedy}
                CalculateLocal={CalculateLocal}
            />
            <InputPer
                Delete={() => Delete(data.id)}
                msg={msg}
                save={SaveData}
                CalculateLocal={CalculateLocal}
            />
        </li>
    )
}