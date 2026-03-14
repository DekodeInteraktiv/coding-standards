<?php
// phpcs:ignoreFile WordPress.Files.FileName.NotHyphenatedLowercase, WordPress.Files.FileName.InvalidClassFileName
/**
 * Sniff: DisallowDoubleSpace
 *
 * Forbids two or more consecutive spaces within a line (outside of indentation).
 * The project uses tabs for indentation, so double spaces have no purpose.
 *
 * @package Dekode
 */

declare( strict_types = 1 );

namespace Dekode\Sniffs\Formatting;

use PHP_CodeSniffer\Files\File;
use PHP_CodeSniffer\Sniffs\Sniff;

/**
 * Class DisallowDoubleSpaceSniff
 */
final class DisallowDoubleSpaceSniff implements Sniff {

	/**
	 * Registers the tokens that this test wants to listen for.
	 *
	 * @return list<int>
	 */
	public function register(): array {
		return [ T_WHITESPACE ];
	}

	/**
	 * Processes this test, when one of its tokens is encountered.
	 *
	 * @param File $phpcs_file The file being scanned.
	 * @param int  $stack_ptr  The position of the current token.
	 */
	public function process( File $phpcs_file, $stack_ptr ): void {
		$tokens  = $phpcs_file->getTokens();
		$content = $tokens[ $stack_ptr ]['content'];

		// Only interested in tokens that contain two or more consecutive spaces.
		if ( ! str_contains( $content, '  ' ) ) {
			return;
		}

		// Skip indentation: walk backwards on the same line.
		// If we find no non-whitespace token before this one, it is indentation.
		$line = $tokens[ $stack_ptr ]['line'];
		$prev = $stack_ptr - 1;

		while ( $prev >= 0 && $tokens[ $prev ]['line'] === $line ) {
			if ( T_WHITESPACE !== $tokens[ $prev ]['code'] ) {
				// A non-whitespace token exists earlier on this line — not indentation.
				$fix = $phpcs_file->addFixableError(
					'Double spaces are not allowed; use a single space.',
					$stack_ptr,
					'Found'
				);

				if ( $fix ) {
					$phpcs_file->fixer->replaceToken(
						$stack_ptr,
						(string) preg_replace( '/ {2,}/', ' ', $content )
					);
				}

				return;
			}

			--$prev;
		}
	}
}
