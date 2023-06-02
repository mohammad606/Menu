import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavbarA.css"
import { auth } from "../firebase/dataFire"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';


function NavbarA() {
    // ----------------------------------------------------------------------start logout user event
    const nve = useNavigate()

    const logOut = () => {
        signOut(auth).then(() => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You want to leave!",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
              }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.clear('')
                    window.history.forward()
                    nve('/')
                }
              })
        }).catch((error) => { console.log(error) })

    }
    // ----------------------------------------------------------------------end logout user event

    //------------------------------------------------------------------- start filter acsses users
    const rendarBtn = () => {
        if (localStorage.getItem('admin') == undefined) {
            return (
                <>
                    <Nav.Link className='colorW ps-5' href="/">Menu</Nav.Link>
                    <Nav.Link className='colorW ps-5' href="/login">log in</Nav.Link>

                </>
            )
        } else {
            return (
                <>
                    <Nav.Link className='colorW ps-5' href="/">Menu</Nav.Link>
                    <Nav.Link className='colorW ps-5 ' onClick={logOut} >Logout</Nav.Link>
                    <Nav.Link className='colorW ps-5' href="/editAdmin">Edit</Nav.Link>
                </>
            )
        }
    }
    //------------------------------------------------------------------- end filter acsses users
    


    return (
        <Navbar className="navbar text-center m-0" bg="dark" expand="lg">
            <Container >
                <div className='iconName'>
                <img alt='sorry' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAFVBMVEVMaXHXewPXewLXegLXewLXegHXegKFlCImAAAAB3RSTlMA/k2j1h5/GL6i0gAAAAlwSFlzAAAD6AAAA+gBtXtSawAAAVBJREFUeJztmNFuwyAMADG2+f9PrpxkxF3zsKkz0ba7J4SqcLExDm0NAAAAAAAAAAAAAOANvO+88wyAX4i7f2P6hxkmOzZS7XU9pk2rK1JEtPc+NFabb6wiFsdB6FmtgomMuah8GAwR20dd5g9q0PP58drHsD8Np1exgJ9LJYEUo2qBJiL9VUBFdJGAXQqMdQJycwT87j0wLqsgaRULeFopCeQclQr0cwsmAS/eAW07fVQ1zn49Ix2nzzFbfBK3EAi2duRZ4JiV4nakMwXRC8ZLCqIdleZAn8twXJ4DtkagnX0nC4RXYRY0V9kMQRYoDoFmgVlzTwIRmNsF/G6BtkbALgXGMgGf+/3zJtQ1Apo/RS1nYEkZul5+kEQCKtvh2O8F+8VgtqMQmLO17ciPi5GYnr1o246rrkbNN742C/APcP4nBAAAAAAAAAAAAPgLPAB1BgU/BSnGMwAAAABJRU5ErkJggg=="/>
                </div>
                <Navbar.Toggle style={{ backgroundColor: "#f8f8f8" }} aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="  me-auto my-2 my-lg-0"
                        style={{ maxHeight: '120px' }}
                        navbarScroll
                        
                    >
                        {rendarBtn()}

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarA;