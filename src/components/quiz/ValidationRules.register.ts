const validationRules = {
    firstName: {
        required: "First Name is required",
        minLength: { value: 3, message: "Name must be at least 3 characters" },
        maxLength: { value: 50, message: "Name must be less than 50 characters" },
    },
    lastName: {
        required: "Last Name is required",
        minLength: { value: 3, message: "Name must be at least 3 characters" },
        maxLength: { value: 50, message: "Name must be less than 50 characters" },
    },
    email: {
        required: "Email is required",
        pattern: {
            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
            message: "Invalid email format",
        },
    },
    linkedin: {
        pattern: {
            value: /^(https?:\/\/)?([\w]+\.)?linkedin\.com\/(in|pub|profile)\/[^/\s]+\/?$/,
            message: "Invalid Linkedin URL",
        },
    },
    profession: {
        required: "Profession is required",
        minLength: { value: 3, message: "Profession must be at least 3 characters" },
        maxLength: { value: 50, message: "Profession must be less than 50 characters" },
    },
    website: {
        required: "Company website is required",
        pattern: {
            value: /^(https?:\/\/)?([\w]+\.)*[\w]+\.[\w]{2,}(\/[\w#]+\/?)*$/,
            message: "Invalid URL format",
        },
    },
    password: {
        required: "Password is required",
        minLength: { value: 3, message: "Company name must be at least 3 characters" },
        maxLength: { value: 200, message: "Company name must be less than 200 characters" },
        pattern: {
            value: /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{12,32}$/,
            message: "Password must be at least 12 characters long and contain at least one uppercase letter, one digit, and one special character",
        },
    },
    countryCode: {
        required: "Country selection is required",
    },
};
export default validationRules;