const Icon = ({name, className, ...rest}) => {
	return (
		<span
			className={`bi bi-${name.toLowerCase()} ${className ? className : ''}`}
			{...rest}
			aria-hidden="true"></span>
	);
};
export default Icon;