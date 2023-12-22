import bcrypt from 'bcrypt'

export const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = 10
    return await bcrypt.hash(password, saltRounds)
}

export const comparePasswords = async (candidatePassword: string, hashedPassword: string) => {
    return await bcrypt.compare(candidatePassword, hashedPassword)
}