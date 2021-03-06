import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMessages, setFilter, setSortParam } from '../../store/message/message-actions';
import styles from './Sidebar.module.scss';

const Sidebar = () => {

    const {sort} = useSelector(state => state.messages);
    const dispatch = useDispatch();

    const handlerSelectSort = (e) => {
        dispatch(setSortParam(e.target.value));
    }

    const handlerFilterBtn = (param) => {
        dispatch(setFilter(param));
    }

    const loadOldMessages = () => {
        dispatch(loadMessages(0, true));
    }

    return (
        <section className={styles.sidebar}>
            <div className={styles.title}>
                Фильтры:
            </div>
            <div className={styles.params}>
                <button onClick={() => handlerFilterBtn('all')} className={styles.paramsBtn}>Показать все</button>
                <button onClick={() => handlerFilterBtn('favorite')} className={styles.paramsBtn}>Избранное</button>
                <select onChange={handlerSelectSort} value={sort} className={styles.paramsSelect} name="sort">
                    <option value="old">Сначала старые</option>
                    <option value="new">Сначала новые</option>
                </select>
                <button onClick={loadOldMessages} className={styles.paramsBtn}>Загрузить старые сообщения</button>
            </div>
        </section>
    );
};

export default Sidebar;