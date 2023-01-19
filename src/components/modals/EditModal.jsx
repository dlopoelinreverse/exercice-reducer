import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeEditModal, setEditPost, updatePostData } from '../../features/modals/modalsSlice'
import { edtitBody, edtitTitle } from '../../features/posts/postsSlice';
import { fetchPatch } from '../../utils/fetcher';

export default function EditModal() {
    const editModal = useSelector(state => state.modalsReducer.editModal);
    const dispatch = useDispatch();
    const {title, body, id} = editModal.postData;
    const {isEditing} = editModal;

    const handleCloseModal = () => {
        dispatch(closeEditModal())
    }
    const handleDoubleClick = (e) => {
        const {id} = e.target;
        dispatch(setEditPost({id}))
    }
    const handleKeyDown = (e) => {
        const {key} = e;
        const {value} = e.target;
        if (key === "Enter") {
            
            if (e.target.id === "title") {
                const data = {
                    title: value,
                };
                const body = JSON.stringify(data);
                fetchPatch("https://jsonplaceholder.typicode.com/posts/" + id, body).then(res => dispatch(edtitTitle({title : res.title, id}), dispatch(setEditPost({id: e.target.id})), dispatch(updatePostData(res))));
            } else if (e.target.id === "body") {
               const data = {
                    body: value,
                }
                const body = JSON.stringify(data);
                fetchPatch("https://jsonplaceholder.typicode.com/posts/" + id, body).then(res => dispatch(edtitBody({body : res.body, id}), dispatch(setEditPost({id: e.target.id})), dispatch(updatePostData(res))));
            }
           
        }
        else if (key === "Escape") {
            dispatch(setEditPost({id: e.target.id}));
        }
    } 
  return (
    <div className='edit modal'>
        <div className="edit-post modal-content">
            <div className="action-button">
                <span onClick={handleCloseModal}>X</span>
            </div>
            {isEditing.title ? (
                <input type="text" id='title' defaultValue={title} onKeyDown={handleKeyDown} />
            ):(
                <h6 id='title' onDoubleClick={handleDoubleClick}>{title}</h6>
            )}
            {isEditing.body ? (
                <textarea id="body" defaultValue={body} onKeyDown={handleKeyDown}/>
            ) : (
                <p id='body' onDoubleClick={handleDoubleClick}>{body}</p>         
            )}
        </div>
    </div>
  )
}
