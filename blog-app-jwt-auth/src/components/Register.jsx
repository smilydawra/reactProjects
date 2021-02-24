import React from 'react'

const Register = () => {
    return (
        <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card card-signin my-5">
                    <div class="card-body">
                        <h5 class="card-title text-center">Register</h5>
                        <form class="form-signin">
                            <div class="form-label-group">
                                <input type="text" id="name" class="form-control" placeholder="Enter Name" required autofocus />
                                <label for="name">Name</label>
                            </div>
                            <div class="form-label-group">
                                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                                <label for="inputEmail">Email address</label>
                            </div>
                            <div class="form-label-group">
                                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                                <label for="inputPassword">Password</label>
                            </div>
                            <div class="form-label-group">
                                <input type="password" id="confirmPassword" class="form-control" placeholder="Confirm Password" required />
                                <label for="confirmPassword">Password</label>
                            </div>
                            <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign Up</button>
                            <hr class="my-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
