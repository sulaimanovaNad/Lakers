import './SignUp.css'

export function SignUp() {
    return (
        <div className='signup'>
            <div class="center">
                <h1>Sign Up</h1>
                <form>
                    <div class="inputbox">
                        <input type="text" required="required"></input>
                            <span>Email</span>
                    </div>
                    <div class="inputbox">
                        <input type="text" required="required"></input>
                            <span>Password</span>
                    </div>
                    <div class="inputbox">
                        <input type="button" value="submit"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}