const routes = {
    home: '/',
    create: '/create',
    reservation: (id?: string): string => `/reservation/${id ? id : ':id'}`,
};

export { routes };
