import { Translation } from "./translationRepository";

interface Vocabulary {
    userId: string;
    translation: Translation[];
}

export const createVocabulary = async (translation: Translation): Promise<Translation> => {
    const sql = `INSERT INTO translations (source, source_language, translation, translation_language, transcription) 
    VALUES ($1, $2, $3, $4, $5) RETURNING *;`;
    const values = [translation.source, translation.sourceLanguage, translation.translation, translation.translationLanguage, translation.transcription];
    
    const result = await query(sql, values);

    return result.rows[0] as Translation;
}