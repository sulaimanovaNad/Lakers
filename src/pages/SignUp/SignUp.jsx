import './SignUp.css'

export function SignUp() {
    return (
        <div className='signup'>
            <div className="center">
                <h1>Sign Up</h1>
                <form>
                    <div className="inputbox">
                        <input type="text" required="required"></input>
                            <span>Email</span>
                    </div>
                    <div className="inputbox">
                        <input type="text" required="required"></input>
                            <span>Password</span>
                    </div>
                    <div className="inputbox">
                        <input type="button" value="submit"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}