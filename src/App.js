import React, {useState} from 'react';

   
function App() {    
   
    const [showForm, setshowForm] = useState(0);
    function handleClick() {
        if (showForm === 0){
            setshowForm(1);
        }
        else {
            setshowForm(0)
        }
    }  

    function Login(){
        return (
            <div className="col-3 mx-auto my-auto pb-4 bg-secondary rounded">
            <form action="">
                <div className="my-3 mx-3">
                    <label for="please_login" className="form-label pt-3"><h2>Please login</h2></label>
                    <input type="email" className="form-control" placeholder="Email Address" />
                </div>
                <div className="mb-3 mx-3">
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="mb-3 mx-3">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label for="remember me" className="form-check-label px-2">Remember me</label>
                </div>
                <div className="pb-3 mx-3">
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="button">Login</button>
                        <button className='btn btn-primary my-auto' type='button' onClick={handleClick}>Show me the form</button>
                    </div>
                </div>
            </form>
        </div>
        )
    }

    function Button() {
        return (
            <div className='w-100 my-auto' id="bcontainer">
                <button id="showme"className='btn btn-primary my-auto' type='button' onClick={handleClick}>Show me the form</button>
            </div>
        )
    }

    return (showForm === 0 ? <Button /> : <Login />)
}

export default App;
