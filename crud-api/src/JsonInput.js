import { AiOutlineCloseCircle } from 'react-icons/ai';

const JsonInput = ({keyValue, handleRemoveKey, jsonKey, jsonValue}) => {
    return (keyValue.map(item => {
        return <div className="text-center" id="jsonInput" key={item}>
            <span className="ms-4">"</span>
            <input type="text" className="form-control d-inline-block ms-2  my-2 w-25 ps-2" placeholder="Key" name="key" value={jsonKey} onChange={e => jsonKey = (e.target.value)} />
            <span className="ms-2">"</span>
            <span className="ms-4">:</span>
            <span className="ms-4">"</span>
            <input type="text" className="form-control d-inline-block ms-2  my-2 w-50 ps-2" placeholder="Value" value={jsonValue}/>
            <span className="mx-2 position-relative">"  ,
            <span className="position-absolute top-0 bottom-0 my-auto ms-2 start-100">{item !== 1 && <AiOutlineCloseCircle className="text-danger" style={{cursor: "pointer"}} onClick={() => handleRemoveKey(item)} /> }
            </span></span>
        </div>
        })
    )
}

export default JsonInput;