import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import swal from 'sweetalert';
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);


const Promo = () => {
    const app = useRef();

    useLayoutEffect( () => {
        let ctx = gsap.context( () => {
            gsap.to(".present-text", {scale: 1.5})
            gsap.to(".present", {delay: 0.5,rotation: 360, y:600, duration: 4, opacity: 1, scale: 2, ease: "bounce"})
        }, app);
        
        const onMove = () => {
        gsap.to(".present", {delay: 7, duration: 2, opacity: 0, display: "none"})
        gsap.to(".present-text", {delay: 7, duration: 0.5, text: 'Do not miss your "LUCK"!', ease: "power2"})
        };
        window.addEventListener("pointermove", onMove);

        return () => {
            ctx.revert(); 
    
            window.removeEventListener("pointermove", onMove); 
        };
    }, [] );

    const promocode = () => {
        swal({
            title: "You've got a 20% discount!",
            text: 'Just use promocode "LUCK" at the checkout!',
            icon: "success",
            button: "Start shopping!",
            className: "swal-size-sm",
        });
    }

    return (
        
        <div ref={app} className='present-box'>
            <img className="present" onClick={ promocode } src= {process.env.PUBLIC_URL + "extra/present.png"}  alt="a gift" /> 
            <h3 className='present-text'>Tap on the present to get it!</h3>
        </div>
        
    )
}

export default Promo;