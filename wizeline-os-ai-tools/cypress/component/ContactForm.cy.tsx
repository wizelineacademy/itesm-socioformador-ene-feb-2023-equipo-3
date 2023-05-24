import ContactForm from "@/components/Form/ContactForm";

describe('ContactForm.cy.tsx', () => {
  it('playground', () => {
    {({ handleSubmit, handleChange, values, errors, touched }) => (
      cy.mount(<ContactForm
        handleChange={handleChange}
        values={values}
        errors={errors}
        touched={touched}
      ></ContactForm>)
    )}
    
  })
})