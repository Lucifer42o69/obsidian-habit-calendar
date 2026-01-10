export const useToast = () => {
	return {
		error: (message: string, options?: { position?: string }) => {
			console.error(message);
			alert(message);
		},
	};
};

