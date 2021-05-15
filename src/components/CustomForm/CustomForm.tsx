import React from 'react'
import { Formik, Form, FormikHelpers } from 'formik'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { PayloadAddToAnnouncements } from '../../store/announcements/types'

export interface IProps {
  title?: string
  description?: string
  buttonName: string
  addPost: ({ title, description }: { title: string; description: string }) => void
}

export const CustomForm: React.FC<IProps> = ({
  title = '',
  description = '',
  addPost,
  buttonName,
}) => {
  const onSubmitForm = (
    values: PayloadAddToAnnouncements,
    actions: FormikHelpers<PayloadAddToAnnouncements>
  ) => {
    console.log(values)
    addPost(values)
    actions.resetForm()
  }
  return (
    <div>
      <Formik
        initialValues={{
          title,
          description,
        }}
        onSubmit={onSubmitForm}>
        {({ handleChange, values }) => (
          <Grid container>
            <Grid item xs={12}>
              <Form>
                <TextField
                  onChange={handleChange}
                  value={values.title}
                  label='Title'
                  name='title'
                  variant='outlined'
                  fullWidth
                  margin='normal'
                  required={true}
                />

                <TextField
                  value={values.description}
                  onChange={handleChange}
                  label='Description'
                  name='description'
                  variant='outlined'
                  fullWidth
                  margin='normal'
                  required={true}
                />
                <Button color='primary' type='submit'>
                  {buttonName}
                </Button>
              </Form>
            </Grid>
          </Grid>
        )}
      </Formik>
    </div>
  )
}
