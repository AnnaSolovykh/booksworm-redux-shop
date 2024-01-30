import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import swal from 'sweetalert';
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Promo = () => {
    const presentRef = useRef();
    const textRef = useRef();
    const hasAnimated = localStorage.getItem('hasAnimated');

    useEffect(() => {
        if (!hasAnimated) {
            gsap.to(presentRef.current, { delay: 0.5, rotation: 360, y: 600, duration: 2, opacity: 1, scale: 2, ease: "bounce" });
            localStorage.setItem('hasAnimated', 'true');
        } else {
            gsap.to(textRef.current, { duration: 1, text: 'Do not miss your "LUCK"!', ease: "power2" });
        }
    }, [hasAnimated]);

    const promocode = () => {
        swal({
            title: "You've got a 20% discount!",
            text: 'Just use promocode "LUCK" at the checkout!',
            icon: "success",
            button: "Start shopping!",
            className: "swal-size-sm",
        }).then(() => {
            gsap.to(textRef.current, { delay: 1, duration: 1, text: 'Do not miss your "LUCK"!', ease: "power2" });
            gsap.to(presentRef.current, { delay: 1, opacity: 0, duration: 1, display: "none" });
        });
    };

    return (
        <div className='present-box'>
            <img ref={presentRef} className="present" onClick={promocode} src={process.env.PUBLIC_URL + "extra/present.png"} alt="a gift" /> 
            <h3 ref={textRef} className='present-text'>Tap to get the present!</h3>
        </div>
    );
};

export default Promo;
