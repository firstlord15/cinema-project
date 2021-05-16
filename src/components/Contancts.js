import React from 'react';
import './css/Detail.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Contacts = () => {
    return (
        <div>
            <div className="container bg dark-2 mt-3 mb-2">
                <h1>Contacts us</h1> <br />

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsa dolore soluta aliquam commodi adipisci illum omnis nulla eligendi nisi corrupti, deserunt hic. Voluptatibus eligendi natus fuga voluptatum quia. Totam!</p> <br />

                <p>
                    <svg style={{ color: "#17c6ff", marginBottom: "3px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                    </svg> Mail: <a href="https://mail.ru" className="cont-text">ratmir.yuldashev28@mail.ru</a>
                </p>
                <p>
                    <svg style={{color: "#0095ff", marginBottom: "4px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone-fill" viewBox="0 0 16 16">
                        <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
                    </svg>
                    Number: <span>+996-550-05-25-22</span>
                </p>
                <br />

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, consequuntur aspernatur, ullam mollitia ipsa praesentium enim repudiandae quis, omnis itaque animi placeat molestias facere quisquam officiis accusamus distinctio nam labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloremque, assumenda molestiae ea ratione aspernatur eaque voluptatibus culpa porro odit, tenetur, necessitatibus nihil. Aut distinctio facere provident reiciendis aperiam mollitia?\</p>
            </div>
        </div>
    );
};

export default Contacts;