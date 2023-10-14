import { useState } from 'react';

export function WordCounter() {
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);
    const [update, setUpdate] = useState(false);

    const handleChange = (event) => {
        setText(event.target.value);
        setUpdate(true);
    }

    const updateCount = (status) => {
        if (!status) return;
        setUpdate(false);
        const words = text.split(' ');
        let c = 0;
        words.forEach((word) => {
            if (word.trim() !== '') c++;
        })
        setCount(c);
    }

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-5 p-3" style={{boxShadow:"1px 2px 9px grey"}}>
                    <div className="text-center">
                        <h2 className="h2">Responsive Paragraph Word Counter</h2>
                    </div>
                    <div>
                        <textarea value={text} onChange={handleChange} className="form-control border-dark border-2" rows="5" placeholder="Enter text here"></textarea>
                    </div>     
                    {update? updateCount(true) : updateCount(false)}               
                    <div className="my-4">Word Count: {count}</div>
                </div>
            </div>
        </div>
    )
}