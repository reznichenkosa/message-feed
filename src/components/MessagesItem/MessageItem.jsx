import React from 'react';
import styles from './MessageItem.module.scss';
import contentImg from '../../assets/img/content-img.png';
import avatar from '../../assets/img/avatar.png';
import sendMessagesIcon from '../../assets/icons/sendMessage.png';
import settingsIcon from '../../assets/icons/settings.png';
import favoriteIcon from '../../assets/icons/favorite.png';
import favoriteFillIcon from '../../assets/icons/favoriteFill.png';
import hideMessageIcon from '../../assets/icons/hideMessage.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavoriteMessage } from '../../store/message/message-actions';

const MessageItem = ({author, content, channel, id, date}) => {

    const {favorite} = useSelector(state => state.messages);
    const dispatch = useDispatch();

    const formatDate = date.slice(11,16);
    const isFavorite = favorite.includes(id);

    const toggleFavorite = () => {
        dispatch(toggleFavoriteMessage(id));
    }

    return (
        <div className={styles.message}>
            <div className={styles.top}>
                <div className={styles.topLeft}>
                    <div className={styles.avatar}>
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className={styles.author}>
                        <div className={styles.name}>
                            {author}
                        </div>
                        <div className={styles.comment}>
                            Текст поста в соц. сетях если это комментарий
                        </div>
                    </div>
                </div>
                <div className={styles.topRight}>
                    <div className={styles.groupBtns}>
                        <button className={styles.btn}>Левый</button>
                        <button className={styles.btn}>Центр</button>
                        <button className={styles.btn}>Правый</button>
                    </div>
                    <div className={styles.icons}>
                        
                        <img src={sendMessagesIcon} alt="sendMessage" />
                        <img src={hideMessageIcon} alt="hideMessage" />
                        <img src={settingsIcon} alt="settings" />
                        <img onClick={toggleFavorite} src={isFavorite ? favoriteFillIcon : favoriteIcon} alt="favorite" />
                    </div>
                </div>
            </div>
            <div className={styles.middle}>
                <div className={styles.date}>{formatDate}</div>
                <div className={styles.content}>
                    <p className={styles.text}>{content}</p>
                    <a href="#" className={styles.nextLink}>Далее</a>
                    <img src={contentImg} alt="content-img" />
                </div>
            </div>
            <div className={styles.bottom}>
                <span className={styles.tag}>#Новое</span>
                <span className={styles.tag}>#Эксперт</span>
            </div>
        </div>
    );
};

export default MessageItem;