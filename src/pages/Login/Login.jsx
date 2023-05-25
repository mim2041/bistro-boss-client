import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        loadCaptchaEnginge(6); 
    } ,[])

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const password = form.password.value;
        console.log(name, password);
    }

    const handleValidateCaptcha = e => {
        const user_captcha_value = captchaRef.current.value;
        console.log(user_captcha_value);

        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }
        else{
            setDisabled(true);
        }
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center lg:text-left md:w-1/2 ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" name="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control">
                        <label className="label">
                        <LoadCanvasTemplate />
                        </label>
                        <input ref={captchaRef} type="text" placeholder="type the captcha" name="captcha" className="input input-bordered" />
                        <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button>
                        </div>
                        <div className="form-control mt-6">
                        <input disabled={disabled} className="btn btn-primary" type="submit" value="Login"/>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;