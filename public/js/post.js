const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const post_content = document.querySelector('#content').value.trim();

  if (title && post_content) {
    const response = await fetch(`/api/post/new-post`, {
      method: 'POST',
      body: JSON.stringify({ title, post_content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard/myPosts');
    } else {
      alert('Failed to create project');
    }
  }
};

document.querySelector('#new-post').addEventListener('submit', newFormHandler);
