import React from 'react'

export default function Footer() {
  return (
   <>
   <div className='bg-black text-white'>

    <div className="lg:flex xl:ml-12 justify-between ml-6 text-18px pt-32 ">
    <div className="lg:flex">
      <div>
        <div>General Inquiries</div>
        <div>moviemania@gmail.com</div>
      </div>
      <div className="lg:ml-72">
        <div>Contact</div>
        <div>+91 9078063258</div>
      </div>
    </div>
    <div>
      <ul className="lg:flex lg:mr-12 gap-6 ">
        <li className="">
          <a className="underline text-neutral-500" href="">Offerings</a>
        </li>
        <li>
          <a className="underline text-neutral-500" href="">Clients</a>
        </li>
        <li>
          <a className="underline text-neutral-500" href="">Work</a>
        </li>
        <li>
          <a className="underline text-neutral-500" href="">Approach</a>
        </li>
        <li>
          <a className="underline text-neutral-500" href="">Team</a>
        </li>
      </ul>
    </div>
  </div>

  <div className="lg:flex ml-6 xl:ml-12 justify-between lg:mr-12 lg:mt-32 pb-12">
      <div className="">
      © Movie Mania
      </div>
      <div className="mt-12 lg:mt-0 flex justify-between ">
          <button className="bg-customButton-light p-4 rounded-2xl lg:pt-16px  lg:pb-16px lg:pr-47px lg:pl-47px lg:mr-4 xl:rounded-xl ">Linkedln</button>
          <button className="bg-customButton-light p-4 rounded-2xl  lg:pt-16px lg:pb-16px lg:pr-47px lg:pl-47px xl:rounded-xl mr-6 xl:mr-0">Instagram</button>
      </div>
  </div>
   </div>
   </>
  )
}
