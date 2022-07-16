import 'react-datepicker/dist/react-datepicker.css';
import 'sweetalert2/dist/sweetalert2.min.css';

import DatePicker, { registerLocale } from 'react-datepicker';
import Modal from 'react-modal';
import es from 'date-fns/locale/es';
import { addHours, differenceInSeconds } from 'date-fns';
import { useEffect, useMemo, useState } from 'react';
import Swal from 'sweetalert2';
import { useUiStore } from '../../hooks/useUiStore';
import { useCalendarStore } from '../../hooks/useCalendarStore';
registerLocale('es', es);

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

export const CalendarModal = () => {
    const { activeEvent, startSavingEvent } = useCalendarStore();
    const { isDateModalOpen, closeDateModal } = useUiStore();
    const [formSubmitted, setFormSubmitted] = useState();
    const [formValues, setFormValues] = useState({
        title: '',
        notes: '',
        start: new Date(),
        end: addHours(new Date(), 2)
    });

    const titleClass = useMemo(() => {
        if (formSubmitted && formValues.title.length === 0) {
            return 'form-control is-invalid';
        }

        return 'form-control';
    }, [formValues.title, formSubmitted]);

    useEffect(() => {
        if (activeEvent) setFormValues({ ...activeEvent });
    }, [activeEvent]);

    const onDateChanged = (event, changing) => {
        setFormValues({
            ...formValues,
            [changing]: event
        });
    };

    const onInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        const difference = differenceInSeconds(formValues.end, formValues.start);

        if (isNaN(difference) || difference <= 0)
            return Swal.fire(
                'Error',
                'La fecha de inicio debe ser anterior a la de fin',
                'error'
            );

        if (formValues.title === '') return;

        await startSavingEvent(formValues);
        closeDateModal();
    };

    return (
        <Modal
            isOpen={isDateModalOpen}
            onRequestClose={closeDateModal}
            style={customStyles}
            overlayClassName='modal-fondo'
            closeTimeoutMS={200}
            className='modal'>
            <h1> Nuevo evento </h1>
            <hr />
            <form className='container' onSubmit={onSubmit}>
                <div className='form-group mb-2'>
                    <label>Fecha y hora inicio</label>
                    <DatePicker
                        locale='es'
                        timeCaption='Hora'
                        className='form-control'
                        selected={formValues.start}
                        dateFormat='Pp'
                        showTimeSelect
                        onChange={(event) => onDateChanged(event, 'start')}
                    />
                </div>

                <div className='form-group mb-2'>
                    <label>Fecha y hora fin</label>
                    <DatePicker
                        locale='es'
                        timeCaption='Hora'
                        minDate={formValues.start}
                        className='form-control'
                        selected={formValues.end}
                        dateFormat='Pp'
                        showTimeSelect
                        onChange={(event) => onDateChanged(event, 'end')}
                    />
                </div>

                <hr />
                <div className='form-group mb-2'>
                    <label>Titulo y notas</label>
                    <input
                        type='text'
                        className={titleClass}
                        placeholder='Título del evento'
                        name='title'
                        autoComplete='off'
                        value={formValues.title}
                        onChange={onInputChange}
                    />
                    <small id='emailHelp' className='form-text text-muted'>
                        Una descripción corta
                    </small>
                </div>

                <div className='form-group mb-2'>
                    <textarea
                        type='text'
                        className='form-control'
                        placeholder='Notas'
                        rows='5'
                        name='notes'
                        value={formValues.notes}
                        onChange={onInputChange}></textarea>
                    <small id='emailHelp' className='form-text text-muted'>
                        Información adicional
                    </small>
                </div>

                <button type='submit' className='btn btn-outline-primary btn-block'>
                    <i className='far fa-save'></i>
                    <span> Guardar</span>
                </button>
            </form>{' '}
        </Modal>
    );
};
