import axios from "axios";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {

  // I used formik built-ins to handle state change, validation/error handling, and submit functionality
  const formik = useFormik({
    initialValues: {
      email: '',
      paid: '',
      scenarios: [],
      frequency: '',
      brand: '',

    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      paid: Yup.string().required('Required'),
      scenarios: Yup.array().min(1, 'Required'),
      frequency: Yup.string().required('Required'),
      brand: Yup.string().max(100, 'Must be 100 characters or less').required('Required'),
    }),
    onSubmit: async values => {
      values.scenarios = values.scenarios.toString()
      try {
        await axios.post("/api/members/", values)
        alert("You've been added to the mailing list!")
      } catch (err) {
        let error = err.toString()
        if (error.includes('400')) {
          // I couldn't quite figure out how to get more detailed error handling out of the backend so Ive hard coded this one. The form is handling a majority of potential validation issues but I added a unique constraint to the email field in the database and this is the only likely reason we'd see a 400 status here.
          alert("That email is already on our list")
        } else {
          alert(err)
        }
      }
    },
  });

  const handleDelete = async () => {
    try {
      await axios.delete("/api/members/")
      alert("Mailing list deleted. Please enter your new email address and pass the word on to others.")
    } catch (err) {
      alert(err)
    }
  }

  const capitalizeWords = (string) => {
    let words = string.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
  }

  return (
    <Container className="px-5 pb-6 justify-content-start">
      <Form onSubmit={formik.handleSubmit}>
        <h2>Register</h2>
        <p>Signup for the mailing list to receive hourly email updates about What's <i>Really</i> Going On</p>
        <Form.Group controlId="email">
          <Form.Label>
            Email address&nbsp;
            {formik.touched.email && formik.errors.email ? <span className="text-danger">{formik.errors.email}</span> : null}
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else and you shouldn't either.
          </Form.Text>
        </Form.Group>
        <br />

        <Form.Group controlId="paid">
          <Form.Label>
            Will you be signing up for a paid membership?&nbsp;
            {formik.touched.paid && formik.errors.paid ? <span className="text-danger">{formik.errors.paid}</span> : null}
          </Form.Label>
          <Form.Select
            name="paid"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.paid}
            placeholder="Select 'Yes' or 'No'">
            {/* This doesnt look good on mobile view but I don't think these users would have easily trackable devices like smart phones so it's ok */}
            <option hidden> Select 'Yes' or 'No'. </option>
            <option value={true}>Yes</option>
            <option value={false} >No</option>
          </Form.Select>
          <Form.Text className="text-muted">
            We accept money orders addressed to "Just Katlin".
          </Form.Text>
        </Form.Group>
        <br />

        <Form.Group controlId="scenarios">
          <Form.Label>
            What scenarios does your tin foil hat protects you from?&nbsp;
            {formik.touched.scenarios && formik.errors.scenarios ? <span className="text-danger">{formik.errors.scenarios}</span> : null}
          </Form.Label>
          {['government surveillance', 'alien abduction', 'mind control', 'convincing instagram ads'].map((value) => (
            <Form.Check
              type="checkbox"
              key={value.split("").join("-")}
              label={capitalizeWords(value)}
              name="scenarios"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={value}
            />
          ))}
        </Form.Group>
        <br />

        <Form.Group controlId="frequency">
          <Form.Label>
            How frequently do you wear your tin foil hat?&nbsp;
            {formik.touched.frequency && formik.errors.frequency ? <span className="text-danger">{formik.errors.frequency}</span> : null}
          </Form.Label>
          <br />
          {['always', 'often', 'sometimes', 'never'].map((value) => (
            <Form.Check
              inline
              name="frequency"
              key={value.split("").join("-")}
              type="radio"
              label={capitalizeWords(value)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={value}
            />
          ))}
        </Form.Group>
        <br />

        <Form.Group controlId="brand">
          <Form.Label>
            What is your favorite brand of tin foil to use?&nbsp;
            {formik.touched.brand && formik.errors.brand ? <span className="text-danger">{formik.errors.brand}</span> : null}
          </Form.Label>
          <Form.Control
            type="text"
            label="brand"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.brand}
          />
        </Form.Group>
        <br />

        <Button variant="dark" type="submit">
          Submit
        </Button>
        <br />
        <br />

        <p>Worried that we've been compromised? Click here to delete the whole database!</p>
        <Button variant="danger" type="button" onClick={handleDelete}>
          DELETE EVERYTHING
        </Button>
      </Form>
    </Container>
  );
};

export default SignupForm;