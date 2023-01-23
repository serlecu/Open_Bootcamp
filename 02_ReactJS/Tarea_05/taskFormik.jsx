import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';


const TaskFormik = ({ add, tasksLength }) => {

    const initialTaskValues = {
        taskName: '',
        taskDescription: '',
        taskLevel: LEVELS.NORMAL
    }

    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            e.taskName,
            e.taskDescription,
            false,
            e.taskLevel
        );
        add(newTask);
    }

    const newTaskSchema = Yup.object().shape(
        {
            taskName: Yup.string()
                .required('A task name is required'),
            taskDescription: Yup.string(),
            taskLevel: Yup.string().oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'You must select a level')
                .required('A task level is required'),
        });

    return (
        <div className='col-12'>
            <Formik className='d-flex justify-content-center align-items-center mb-4'
                initialValues={initialTaskValues}
                validationSchema={newTaskSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 2000));
                    sessionStorage.setItem('credentials', values);
                    addTask(values)
                }}
            >
                {({ values,
                    touched,
                    errors,
                    isSubmitting
                }) => (
                    <Form>
                        <label htmlFor='taskName'>Task name</label>
                        <Field id='taskName'
                            name='taskName'
                            placeholder='taskName' />
                        {errors.taskName && touched.taskName && (
                            <ErrorMessage name='taskName'
                                component='div' />
                        )}
                        <label htmlFor='taskDescription'>Task name</label>
                        <Field id='taskDescription'
                            name='taskDescription'
                            placeholder='taskDescription' />
                        {errors.taskDescription && touched.taskDescription && (
                            <ErrorMessage name='taskDescription'
                                component='div' />
                        )}
                        <label htmlFor='taskLevel'>Task level</label>
                        <select name='taskLevel'
                            id='taskLevel'
                            value={values.taskLevel} >
                            <option value={LEVELS.NORMAL} label='Normal' />
                            <option value={LEVELS.URGENT} label='Urgent' />
                            <option value={LEVELS.BLOCKING} label='Blocking' />
                        </select>
                        {errors.taskLevel && touched.taskLevel && (
                            <ErrorMessage name='taskLevel'
                                component='div' />
                        )}
                        <button type='submit'
                            className='btn btn-succesd btn-lg ms-2'>
                            {tasksLength > 0 ? 'Add task' : 'Ceate task'}
                        </button>
                        {isSubmitting && <div>Adding...</div>}
                    </Form>
                )}
            </Formik>
        </div>
    );
}

TaskFormik.propTypes = {
    add: PropTypes.func.isRequired,
    tasksLength: PropTypes.number.isRequired
};

export default TaskFormik;
