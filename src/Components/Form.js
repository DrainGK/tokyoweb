import React from 'react';
import emailjs from 'emailjs-com';

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n9z7uv8', 'template_hrpx8t1', e.target, '3TswScplWokx41TDA')
      .then((result) => {
          console.log(result.text);
          alert("Thank you for your message! We will get back to you soon.");
      }, (error) => {
          console.log(error.text);
          alert("Oops! There was a problem submitting your form.");
      });

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className='w-full font-[Oswald] font-light text-3xl flex flex-col gap-y-12'>
        <h3 className='text-6xl'>START A <br /> <strong className='font-[Huntsman]'>PROJECT</strong></h3>

        <h3 className='font-normal'>About your project</h3>

        <div className='flex flex-col gap-y-4'>
            <p>1. Do you have an existing website?*</p>
            <select id="website" name="website" className='h-[75px] bg-transparent border-b outline-none placeholder:font-light hover:border-black transition ease-in-out' required>
                <option className='text-black' value="I have one">I have one</option>
                <option className='text-black' value="I want one">I want one</option>
            </select>
            <input type="text" name="existing_website" placeholder='Existing website (optional)' className='h-[75px] bg-transparent border-b outline-none placeholder:font-light hover:border-black transition ease-in-out'/>
        </div>

        <div className='flex flex-col gap-y-4'>
            <p>2. Project Type*</p>
            <select id="project" name="project_type" className='h-[75px] bg-transparent border-b outline-none placeholder:font-light hover:border-black transition ease-in-out' required>
                <option className='text-black' value="Web design">Web design</option>
                <option className='text-black' value="Development">Development</option>
                <option className='text-black' value="SEO">SEO</option>
            </select>
        </div>

        <div className='flex flex-col gap-y-4'>
            <p>3. Project budget*</p>
            <select id="budget" name="budget" className='h-[75px] bg-transparent border-b outline-none placeholder:font-light hover:border-black transition ease-in-out' required>
                <option className='text-black' value="-50 000￥">-50 000￥</option>
                <option className='text-black' value="50 000￥ - 100 000￥">50 000￥ - 100 000￥</option>
                <option className='text-black' value="100 000￥ - 200 000￥">100 000￥ - 200 000￥</option>
                <option className='text-black' value="+200 000￥">+200 000￥</option>
            </select>
        </div>

        <h3 className='font-normal text-4xl'>About you</h3>

        <div className='flex flex-col gap-y-4'>
            <p>4. What&apos;s your name?</p>
            <div className='flex flex-col gap-y-2'>
                <input type="text" name="first_name" placeholder='First name*' className='h-[75px] bg-transparent border-b outline-none placeholder:font-light hover:border-black transition ease-in-out'required/>
                <input type="text" name="last_name" placeholder='Last name*' className='h-[75px] bg-transparent border-b outline-none placeholder:font-light hover:border-black transition ease-in-out'required/>
            </div>
        </div>

        <div className='flex flex-col gap-y-4'>
            <p>5. About your company</p>
            <select id="company" name="company" className='h-[75px] bg-transparent border-b outline-none placeholder:font-light hover:border-black transition ease-in-out'>
                <option className='text-black' value="Do you have company?">Do you have company?</option>
                <option className='text-black' value="I have one">I have one</option>
                <option className='text-black' value="It&apos;s a personal request">It&apos;s a personal request</option>
            </select>
        </div>

        <div className='flex flex-col gap-y-4'>
            <p>6. Contact details</p>
            <input type="email" id="email" name="email" placeholder='Email address*' className='h-[75px] bg-transparent border-b outline-none placeholder:font-light hover:border-black transition ease-in-out' required/>
            <input type="text" id="tel" name="telephone" placeholder='Telephone*' className='h-[75px] bg-transparent border-b outline-none placeholder:font-light hover:border-black transition ease-in-out' required/>
        </div>

        <div className='flex flex-col gap-y-4'>
            <p>7. Any other details?</p>
            <textarea id="message" name="message" placeholder='Your message (optional)' className='h-[75px] bg-transparent border-b outline-none placeholder:font-light hover:border-black transition ease-in-out'></textarea>
        </div>

        <div className='w-full flex justify-end'>
            <button
                className={`
                    relative w-fit z-0 flex items-center gap-2 overflow-hidden  border-[1px] 
                    border-[#FFA41B] px-6 py-4 font-[Oswald] font-light
                    uppercase text-[#FFA41B] transition-all duration-500 md:text-2xl text-4xl
                    
                    before:absolute before:inset-0
                    before:-z-10 before:translate-x-[150%]
                    before:translate-y-[150%] before:scale-[2.5]
                    before:rounded-[100%] before:bg-[#FFA41B]
                    before:transition-transform before:duration-1000
                    before:content-[""]

                    hover:scale-105 hover:text-white
                    hover:before:translate-x-[0%]
                    hover:before:translate-y-[0%]
                    active:scale-95`}
            >
                <span>Send Message</span>
            </button>
        </div>
    </form>
  );
}

export default Form;
