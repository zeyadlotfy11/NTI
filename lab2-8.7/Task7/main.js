const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function showLoading() {
    document.getElementById('loading').style.display = 'block';
    document.getElementById('error').style.display = 'none';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

function showError(message) {
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = `Error: ${message}`;
    errorDiv.style.display = 'block';
    hideLoading();
}

function createPostCard(post) {
    return `
        <div class="post-card">
            <div class="post-id">Post #${post.id}</div>
            <div class="post-title">${post.title}</div>
            <div class="post-body">${post.body}</div>
        </div>
    `;
}

function renderPosts(posts, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = posts.map(post => createPostCard(post)).join('');
}

function getPostCount() {
    const input = document.getElementById('postCount');
    const count = parseInt(input.value);
    return count > 0 ? count : 10;
}

function fetchWithPromises() {
    const numberOfPosts = getPostCount();

    showLoading();

    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(posts => {
            const limitedPosts = posts.slice(0, numberOfPosts);

            document.getElementById('promiseSection').style.display = 'block';
            renderPosts(limitedPosts, 'promisePosts');

            hideLoading();
        })
        .catch(error => {
            console.error('Error with Promises:', error);
            showError(`Failed to fetch posts with Promises: ${error.message}`);
        });
}

async function fetchWithAsyncAwait() {
    const numberOfPosts = getPostCount();

    showLoading();

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const posts = await response.json();

        const limitedPosts = posts.slice(0, numberOfPosts);

        document.getElementById('asyncSection').style.display = 'block';
        renderPosts(limitedPosts, 'asyncPosts');

        hideLoading();

    } catch (error) {
        showError(`Failed to fetch posts with Async/Await: ${error.message}`);
    }
}

function clearPosts() {
    document.getElementById('promiseSection').style.display = 'none';
    document.getElementById('asyncSection').style.display = 'none';
    document.getElementById('promisePosts').innerHTML = '';
    document.getElementById('asyncPosts').innerHTML = '';
    hideLoading();
    document.getElementById('error').style.display = 'none';
    console.log('All posts cleared');
}

