import { query } from "@/db/db";

export interface Translation {
    id?: number;
    source: string;
    sourceLanguage: string;
    translation: string;
    translationLanguage: string;
    transcription?: string;
}

export const createTranslation = async (translation: Translation): Promise<Translation> => {
    const sql = `INSERT INTO translations (source, source_language, translation, translation_language, transcription) 
    VALUES ($1, $2, $3, $4, $5) RETURNING *;`;
    const values = [translation.source, translation.sourceLanguage, translation.translation, translation.translationLanguage, translation.transcription];
    
    const result = await query(sql, values);

    return result.rows[0] as Translation;
}

export const find = async (source: string, sourceLanguage: string, translationLanguage: string): Promise<Translation | null> => {
    const sql = `SELECT * FROM translations WHERE source = $1 AND source_language = $2 AND translation_language = $3 LIMIT 1`;
    const values = [source, sourceLanguage, translationLanguage];
    
    const result = await query(sql, values);

    if (result && result.rowCount === 0) {
        return null;
    }

    return result.rows[0] as Translation;
}
