function validateLoginInput(username, password) {
	const errors = [];

	if (!username || username.trim().length < 3) {
		errors.push("Username must be at least 3 characters long.");
	}

	if (!password || password.length < 6) {
		errors.push("Password must be at least 6 characters long.");
	}

	return {
		isValid: errors.length === 0,
		errors,
	};
}

function authenticateUser(username, password) {
	const demoUser = {
		username: "student",
		password: "password123",
		role: "user",
	};

	if (username === demoUser.username && password === demoUser.password) {
		return {
			success: true,
			user: {
				username: demoUser.username,
				role: demoUser.role,
			},
		};
	}

	return {
		success: false,
		message: "Invalid username or password.",
	};
}

module.exports = {
	validateLoginInput,
	authenticateUser,
};
