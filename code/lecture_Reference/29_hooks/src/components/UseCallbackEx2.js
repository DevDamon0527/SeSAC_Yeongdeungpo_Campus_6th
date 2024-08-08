import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export default function UseCallbackEx2({ postId }) {
    const [post, setPost] = useState({});
    // [before]
    const getPost = async () => {
        console.log('data fetching...');
        // 데이터 요청
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        setPost(res.data);
    };

    // [after]
    // useCallback 훅으로 메모이제이션 -> 의존성 배열에 있는 postId 가 변경되지 않는 한
    // 컴포넌트는 리랜더링되지 않음
    // => 필요한 순간에만 api 요청을 날림!!

    // const getPost = useCallback(async () => {
    //     console.log('data fetching...');
    //     // 데이터 요청
    //     const res = await axios.get(
    //         `https://jsonplaceholder.typicode.com/posts/${postId}`
    //     );
    //     setPost(res.data);
    // }, [postId]);

    // useEffect 의존성 배열에 "함수"
    // 컴포넌트가 리랜더링 -> 함수 재생성 (주소값 변경)  -> getPost 재호출
    // useEffect(() => {
    //     getPost();
    // }, [getPost]);

    return (
        <div>
            <h1>UseCallbackEx2</h1>
            {post.id ? post.title : '로딩중...'}
            <br />
        </div>
    );
}

/**
 * (참고)
    useCallback 훅을 사용하여 getPost 함수를 메모이제이션했기 때문에, 
    getPost 함수는 postId가 변경되지 않는 한 동일한 참조값을 유지합니다.
    하지만 useEffect의 의존성 배열에 getPost 함수를 넣으면, 
    getPost 함수가 변경될 때마다 useEffect가 재실행되므로, 
    의존성 배열에 무엇을 넣어야 하는지 신경 써야 합니다.

    당신이 원하는 것은 postId가 변경될 때만 getPost가 호출되도록 하는 것입니다. 
    따라서 useEffect의 의존성 배열에는 count 대신 getPost를 넣어야 합니다. 
    getPost가 메모이제이션된 함수이기 때문에, 
    실제로 postId가 변경될 때만 getPost가 다시 생성되어 useEffect가 트리거됩니다.

    이렇게 하면 postId가 변경될 때마다 getPost 함수가 새로 생성되고,
    useEffect가 호출되면서 API 요청이 이루어집니다. 
 */
