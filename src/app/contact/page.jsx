import React from 'react'

const EmailSection = () => {
  return (
    <section class="contactus">
        <h2 class="ani">Contact Us</h2>
        <div class="contactinfo" >
         <form>
         <input class="name" type="text" name="name" placeholder="name"/>
            <input class="email" type="email" name="name" placeholder="Email"/>
            <input class="massege" type="text" name="name" placeholder="massege"/>
            <input type="button" value="submit" class="btn"/>
   
           
           
           
        </form>
      {/*   <img class="cimg" src="undraw_terms_re_6ak4.svg"> */}
    </div>
    </section>
  )
}

export default EmailSection;