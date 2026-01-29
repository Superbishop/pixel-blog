// 像素博客交互脚本

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('像素博客已加载');

    // 添加打字机效果到页面标题
    addTypewriterEffect();

    // 添加像素边框动画
    addPixelAnimations();

    // 处理表单提交（如果有）
    handleForms();

    // 添加滚动效果
    handleScroll();
});

// 打字机效果
function addTypewriterEffect() {
    const siteTitle = document.querySelector('.site-title');
    if (siteTitle) {
        const text = siteTitle.textContent;
        siteTitle.textContent = '';
        let index = 0;

        function type() {
            if (index < text.length) {
                siteTitle.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100);
            }
        }
        type();
    }
}

// 像素边框动画
function addPixelAnimations() {
    const posts = document.querySelectorAll('.post');

    posts.forEach((post, index) => {
        post.style.animationDelay = `${index * 0.1}s`;
        post.classList.add('fade-in');
    });
}

// 表单处理
function handleForms() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit(form);
        });
    });
}

// 处理表单提交
function handleFormSubmit(form) {
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // 显示提交成功消息
    showNotification('提交成功！感谢你的留言');
    form.reset();
}

// 显示通知
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        background: #000;
        color: #fff;
        border: 2px solid #000;
        font-family: 'Courier New', monospace;
        font-size: 14px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    // 3秒后移除通知
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 滚动效果
function handleScroll() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScroll && currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// 添加到页面上的CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes fade-in {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    .fade-in {
        animation: fade-in 0.5s ease forwards;
    }

    .header.scrolled {
        padding: 10px 0;
        border-bottom: 1px solid #000;
    }

    .notification {
        box-shadow: 4px 4px 0 #333;
    }
`;

document.head.appendChild(style);

// 添加当前日期到页面
function addCurrentDate() {
    const dateElements = document.querySelectorAll('.current-date');

    dateElements.forEach(element => {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        element.textContent = now.toLocaleDateString('zh-CN', options);
    });
}

// 键盘快捷键
document.addEventListener('keydown', function(e) {
    // 按 '/' 键聚焦搜索框
    if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
    }

    // 按 'h' 键返回首页
    if (e.key === 'h' && !e.ctrlKey && !e.metaKey && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        window.location.href = 'index.html';
    }
});

// 页面可见性变化（节省资源）
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('页面已隐藏');
    } else {
        console.log('页面已显示');
    }
});

// 导航链接活动状态
function setActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');

        if (href === currentPath || (currentPath.includes(href) && href !== 'index.html')) {
            link.classList.add('active');
        }
    });
}

setActiveNav();
