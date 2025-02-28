import { useState } from "react";
import { useTranslation } from "react-i18next";
import './Contact.css';

const Contact = () => {
       const { t } = useTranslation();
  
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        description: ""
      });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className='contactWrapper'>
       <div className='container'>
        <div className='form-section'>
            <div className='formWrapper'>
              <form onSubmit={handleSubmit}>
                <p>{t("contact_section_p")}</p>
                  <input  
                    type='text'
                    name='name'
                    placeholder={t("placeName")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                  <input 
                     type="email"
                     name="email"
                     placeholder={t("placeEmail")}
                     value={formData.email}
                     onChange={handleChange}
                     required
                  />
                  <input 
                     type="tel"
                     name="contact"
                     placeholder={t("placeContact")}
                     value={formData.contact}
                     onChange={handleChange}
                     required
                  />
                    <textarea
                      name="description"
                      placeholder={t("placeDesc")}
                      alue={formData.description}
                      onChange={handleChange}
                      className='des'
                      required
                    />
                  <div className='submitButton'>
                    <button>{t("submit_button")}</button>
                  </div>
              </form>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Contact